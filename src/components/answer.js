import React from 'react';

class answer extends React.Component{
    nextquestion(){
        var randoms =[
            '0',
            '1',
            '2',
            '3',
            '4'   
        ]; 
        this.setState({randomsnub:randoms[Math.floor(Math.random() * randoms.length)]})
    }
    render(){

        return(
        <div class="answer">
            <h5>回答欄</h5>
            <div class="answer-options">
                <button type="button">ア</button>
                <button type="button">イ</button>
                <button type="button">ウ</button>
                <button type="button">エ</button>
            </div>
            <div class="next-question">
                <button onClick={() => this.nextquestion()}>次の問題へ</button>
            </div>    
        </div>
        );
    }
}

export default answer;