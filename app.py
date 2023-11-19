#!/usr/bin/python3

from flask import Flask

app = Flask('__name__')


@app.route('/', strict_slashes=False)
def home():
    """Handle hompeage"""
    return "Welcome to Quizz-pizz. Ready to get intellectually entertained?"


@app.route('/start', strict_slashes=False)
def start_quiz():
    """Page before quiz starts"""
    return "You selected __ category and __ difficulty. Start quiz now?"


@app.route('/current-quiz', strict_slashes=False)
def current_quiz():
    """Active quiz page"""
    return "Ongoing quiz..."


@app.route('/history', strict_slashes=False)
def past_quizes():
    """User statistics based on past quizes"""
    return "Overall score. Average"


if __name__ == '__main__':
    app.run(debug=True)