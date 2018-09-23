import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";
import Loader from "../../components/Loader";
import Intro from "../../components/Intro";

class Series extends Component {
    state = {
        series: [],
        seriesName: "",
        isFetching: false
    };

    onSeriesInputChange = e => {
        this.setState({ seriesName: e.target.value, isFetching: true });

        fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({ series: json, isFetching: false }));
    };

    render() {
        const { series, seriesName, isFetching } = this.state;
        console.log(process.env.PUBLIC_URL);

        return (
            <div>
                <Intro message="Here you can find all of your most loved series." />
                <div>
                    <input
                        value={seriesName}
                        type="text"
                        placeholder="Enter series name here..."
                        onChange={this.onSeriesInputChange}
                        style={{
                            height: 40,
                            width: 300,
                            fontSize: 16,
                            paddingLeft: 10,
                            paddingRight: 10,
                            fontWeight: 700,
                            textAlign: "center",
                            border: "1px solid black",
                            outline: "none"
                        }}
                    />
                </div>
                {!isFetching &&
                    series.length === 0 &&
                    seriesName.trim() === "" && (
                        <p
                            style={{
                                color: "#7b7b7b"
                            }}
                        >
                            Please enter series name into the input
                        </p>
                    )}

                {!isFetching &&
                    series.length === 0 &&
                    seriesName.trim() !== "" && (
                        <p>No Tv Series have been found with this name</p>
                    )}

                {isFetching && <Loader />}
                {!isFetching && <SeriesList list={this.state.series} />}
            </div>
        );
    }
}

export default Series;
