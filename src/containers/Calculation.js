import { connect } from "react-redux";
import Chart from "../components/Chart";
var RandomOrg = require("random-org");
var dateFormat = require("dateformat");
var moment = require("moment");

const getData = ({ randomnumbers }) => {
  var nvalue = randomnumbers[randomnumbers.length - 1];
  var random = new RandomOrg({
    apiKey: "6bf4b997-040b-491b-8a46-70b0d092531d"
  });
  var vals = [];
  random
    .generateIntegers({ min: -100, max: 1000, n: nvalue })
    .then(function(result) {
        console.log(result.random.data);
      randomnumbers = result.random.data; // [55, 3]
      console.log(randomnumbers)
    });

  var ylabels = [];
  var d1 = new Date();
  var d2 = new Date(d1);
  var d3 = new Date(d2);
  console.log(dateFormat(d2, "MM/dd hh:MM TT"));
  console.log(moment().toDate());
  console.log(
    moment()
      .add(1, "hour")
      .toDate()
  );
  for (var a = 0; a < nvalue; a++) {
    d3 = moment()
      .add(a, "hour")
      .toDate();
    ylabels.push(dateFormat(d3, "MM/dd hh:MM TT"));
  }

  return {
    labels: ylabels,
    datasets: [
      {
        type: "line",
        label: "Random Numbers",
        fill: false,
        data: randomnumbers,
        borderColor: "rgba(54, 54, 54, 0.6)",
        backgroundColor: "rgba(54, 54, 54, 1)"
      }
    ]
  };
};

const mapStateToProps = (state, ownProps) => ({
  data: getData(state),
  type: "line",
  width: "40%"
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const Calculation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);

export default Calculation;
