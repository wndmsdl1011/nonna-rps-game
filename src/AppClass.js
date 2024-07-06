import React, { Component } from 'react';
import './App.css';
import confetti from 'canvas-confetti';
import BoxClass from './component/BoxClass';

const choice = {
    rock: {
        name: "Rock",
        img: "https://i.natgeofe.com/k/ab1c0ce9-21ea-4543-891a-ff496845b0cf/geology-igneous_3x2.jpg"
    },
    scissors: {
        name: "Scissors",
        img: 'https://i.namu.wiki/i/9uflE3hRwRIk5OZkdtWrMJuGrRzD1oci2v_UVG_QFIkNfdiK9eRsTAvmL6vkLgInO6-ix42vbqFPI5ctvI1qzXHaEDS_4ZnTLnIJnQF0ZT5oUuqWUoaoc_4gLAnqzf2ys7NCBkgPW2fblwikHp2S_Q.webp'
    },
    paper: {
        name: "Paper",
        img: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-sheet-of-paper-png-png-image_13141476.png'
    }
};

export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSelect: null,
            computerSelect: null,
            userResult: "",
            computerResult: ""
        };
    }

    play = (userChoice) => {
        // 사용자의 선택을 상태에 저장
        const userSelection = choice[userChoice];
        this.setState({ userSelect: userSelection });

        // 컴퓨터의 선택을 랜덤으로 결정
        const computerChoice = this.randomChoice();
        this.setState({ computerSelect: computerChoice });

        // 사용자의 결과와 컴퓨터의 결과를 계산
        const userResult = this.judgement(userSelection, computerChoice);
        const computerResult = this.judgement(computerChoice, userSelection); // judgement2 함수 대신 judgement를 사용

        // 결과를 상태에 저장
        this.setState({
            userResult: userResult,
            computerResult: computerResult
        });

        // 사용자가 이겼다면 폭죽 효과 실행
        if (userResult === "win") {
            this.firework();
        }
    };

    randomChoice = () => {
        let itemArray = Object.keys(choice); // 객체의 키(rock, paper, scissors) 배열 생성
        let randomNum = Math.floor(Math.random() * itemArray.length); // 랜덤 인덱스 생성
        let final = itemArray[randomNum]; // 랜덤 키 선택
        return choice[final]; // 랜덤 키에 해당하는 선택 반환
    };

    judgement = (user, computer) => {
        if (user.name === computer.name) {
            return "tie";
        } else if (user.name === "Rock") {
            return computer.name === "Scissors" ? "win" : "lose";
        } else if (user.name === "Scissors") {
            return computer.name === "Paper" ? "win" : "lose";
        } else if (user.name === "Paper") {
            return computer.name === "Rock" ? "win" : "lose";
        }
    };

    firework = () => {
        var duration = 15 * 100;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(() => {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);

            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
                })
            );
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
                })
            );
        }, 250);
    };

    render() {
        // this.state를 통해 현재 상태 값을 가져옴
        const { userSelect, computerSelect, userResult, computerResult } = this.state;

        return (
            <div>
                <h1 className='game-name'>Rock! Paper! Scissors!</h1>
                <div className='main'>
                    <BoxClass title="You" item={userSelect} result={userResult} />
                    <BoxClass title="Computer" item={computerSelect} result={computerResult} />
                </div>

                <div className='btn'>
                    <button onClick={() => this.play("rock")}>✊</button>
                    <button onClick={() => this.play("paper")}>🖐️</button>
                    <button onClick={() => this.play("scissors")}>✌️</button>
                </div>
            </div>
        );
    }
}
