import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {fibNumbers} from './../src/scripts.js'
import {evenFibFilter} from './../src/scripts.js'
import {evenFibsSum} from './../src/scripts.js'


$(document).ready(function(){
  $("form").submit(function(event){
    let userInput = parseInt($("#input").val());
    let fibs = fibNumbers(userInput);
    let evenFibs = evenFibFilter(fibs);
    let output = evenFibsSum(evenFibs);
    $("#output").text(output);
    event.preventDefault();
  });
});
