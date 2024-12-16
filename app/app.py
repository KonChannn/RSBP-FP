from flask import Flask, render_template, request
import joblib

app = Flask(__name__, template_folder='templates')

# Load the scaler
with open('./scaler.pkl', 'rb') as f:
    scaler = joblib.load(f)

# Load the model
with open('./best_xgb.pkl', 'rb') as f:
    model = joblib.load(f)

@app.route('/', methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        
        eligible = request.form['eligible']
        job = request.form['job']
        salary = request.form['salary']
        targeted = request.form['targeted']
        balance = request.form['balance']
        housing = request.form['housing']
        loan = request.form['loan']
        day = request.form['day']
        duration = request.form['duration']
        campaign = request.form['campaign']
        pdays = request.form['pdays']
        previous = request.form['previous']
        marital_married = request.form['marital_married']
        marital_single = request.form['marital_single']
        education_primary = request.form['education_primary']
        education_secondary = request.form['education_secondary']
        education_tertiary = request.form['education_tertiary']
        contact_cellular = request.form['contact_cellular']
        contact_unknown = request.form['contact_unknown']
        poutcome_other = request.form['poutcome_other']
        poutcome_success = request.form['poutcome_success']
        poutcome_unknown = request.form['poutcome_unknown']

        data = [eligible, job, salary, targeted, balance, housing, loan, day, duration, campaign, pdays, previous, marital_married, marital_single, education_primary, education_secondary, education_tertiary, contact_cellular, contact_unknown, poutcome_other, poutcome_success, poutcome_unknown]

        scaled_data = scaler.transform([data])

        prediction = model.predict(scaled_data)
        confidence_no, confidence_yes = model.predict_proba(scaled_data)[0]

        return render_template('result.html', prediction=prediction[0], confidence_no=confidence_no, confidence_yes=confidence_yes)
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='localhost', port=8801, debug=True)