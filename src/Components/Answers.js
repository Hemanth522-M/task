import React from 'react';

class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false,
            classNames: ['', '', '', ''],
        }
        
        this.checkAnswer = this.checkAnswer.bind(this);
    }
    
    checkAnswer(e) {
        let { isAnswered } = this.props;
        if(!isAnswered) {
            let elem = e.currentTarget;
            let { correct, increaseScore } = this.props;
            let answer = Number(elem.dataset.id);
            let updatedClassNames = this.state.classNames;
            if(answer === correct){
                updatedClassNames[answer-1] = 'right';
                increaseScore();
            }
            else {
                updatedClassNames[answer-1] = 'wrong';
            }
            
            this.setState({
                classNames: updatedClassNames,
            })
        }
    }
    

    render() {
        let { answers } = this.props;
        let { classNames } = this.state;
                
        return (
            <div>
                <div>
                    <input
                        type="radio"
                        name="radioGroup"
                        onClick={this.checkAnswer} 
                        className={classNames[0]} 
                        data-id="1"
                    />
                    <span>A:</span> {answers[0]}
                    <br />
                    <input 
                        type="radio"
                        name="radioGroup"
                        onClick={this.checkAnswer} 
                        className={classNames[1]} 
                        data-id="2"
                    />
                    <span>B:</span> {answers[1]}
                    <br />
                    <input 
                        type="radio"
                        name="radioGroup"
                        onClick={this.checkAnswer} className={classNames[1]} data-id="3"
                    />
                    <span>C:</span> {answers[2]}
                    <br />
                    <input 
                        type="radio"
                        name="radioGroup"
                        onClick={this.checkAnswer} className={classNames[1]} data-id="4"
                    />
                    <span>D:</span> {answers[3]}
                </div>
            </div>
        );
    }
}

export default Answers