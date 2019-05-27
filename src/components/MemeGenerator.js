import React, { Component } from 'react';
import '../css/MemeGenerator.css';

export class MemeGenerator extends Component {
    constructor(){
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "https://media.tenor.com/images/a9adda18a785b1cb85eec04517d99178/tenor.gif",
            memeImages: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(reponse => reponse.json())
            .then(response => {
                const {memes} = response.data;
                console.log(memes[0]);
                this.setState({ memeImages: memes});
            })
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({ [name]: value});
    }

    handleSubmit(event){
        event.preventDefault();
        const randomNum = Math.floor(Math.random() * this.state.memeImages.length);
        const randomMemeImage = this.state.memeImages[randomNum].url;
        this.setState({ randomImage: randomMemeImage});
    }

    render() {
        return (
            <div>
                <form className="form-group" onSubmit={this.handleSubmit}>
                <button className="form-control btn btn-success mb-2">Random Meme</button>
                    <input className="form-control mb-2"
                        type = "text" 
                        name = "topText"
                        placeholder = "Top text"
                        value = {this.state.topText}
                        onChange = {this.handleChange}
                    />
                    <input className="form-control mb-2"
                        type = "text" 
                        name = "bottomText"
                        placeholder = "Bottom text"
                        value = {this.state.bottomText}
                        onChange = {this.handleChange}
                    />
                </form>
                <div className="container">
                    <img className="memeImage" src={this.state.randomImage} alt=""/>
                    <h2 className="topText">{this.state.topText}</h2>
                    <h2 className="bottomText">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}