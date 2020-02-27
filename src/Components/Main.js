import React from 'react';
import data from './data/data';
import Answers from './Answers';
import Popup from './Popup';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nr: 0,
            total: data.length,
            showButton: true,
            questionAnswered: false,
            score: 0,
            popOpen: false,
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    }

    pushData(nr) {
        this.setState({
            question: data[nr].question,
            answers: [data[nr].answers[0], data[nr].answers[1], data[nr].answers[2], data[nr].answers[3] ],
            correct: data[nr].correct,
            nr: this.state.nr + 1,
        });
    }

    componentWillMount() {
        let { nr } = this.state;
        this.pushData(nr);
    }

    nextQuestion() {
        let { nr, total, score } = this.state;
        if(nr === total){
            this.setState({
                popOpen: true
            });
        } else {
            this.pushData(nr);
            this.setState({
                questionAnswered: false,
            });
        }
    }

    handleShowButton() {
        this.setState({
            questionAnswered: true
        })
    }


    handleIncreaseScore() {
        this.setState({
            score: this.state.score + 1
        });
    }

    render() {
        let { nr, total, question, answers, correct, showButton, questionAnswered, score} = this.state;

        return (
            <div>
                <Popup  score={score} total={total} popOpen={this.state.popOpen} />
                <div>
                    <div>
                        <h4>Question {nr}/{total}</h4>
                        <p>{question}</p>
                    </div>
                    <Answers answers={answers} correct={correct} showButton={this.handleShowButton} isAnswered={questionAnswered} increaseScore={this.handleIncreaseScore} />
                    <div>
                        {showButton ? <button onClick={this.nextQuestion} >{nr===total ? 'Finish quiz' : 'Next question'}</button> : null}
                    </div>
                </div>
            </div>
        );
    }
};

export default Main
