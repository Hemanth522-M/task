import React from 'react';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            text: '',
        };
        
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            text: 'You have completed the quiz. <br /> You got: <strong>' + this.props.score + '</strong> out of <strong>' +this.props.total +'</strong> questions right.'
        })
    }

    createMarkup(text) {
        return {__html: text};
    }
    
    render() {
        let { text} = this.state;
        return (
            <div>
               {this.props.popOpen &&
               <div>
                <p dangerouslySetInnerHTML={this.createMarkup(text)} />
                </div>
               }       
            </div>
        );
    }
}

export default Popup
