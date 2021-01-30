import React, {useEffect} from 'react';
import MapCard from './MapCard';
import BarChart from '../charts/BarChart';

import MapImage from './MapImage'
import Objectives from './Objective';

import beforeMapSafety from '../../assets/safety_before.png'
import afterMapDuring from '../../assets/safety_during.png'
import beforeMapFrecuency from '../../assets/fre_before.png'
import afterMapFrecuency from '../../assets/fre_during.png'
import placesMap from '../../assets/pois_places_kernel_density.png'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';


const beforeMapSafetyTitle = 'Safety Perception Distribution by Munich Administrative Region Before the Pandemic'
const beforeMapSafetyExplanation = 'This maps displays on a custome scale which districts in Munich according to public opinion were deemed the most unsafe to go BEFORE the pandemic'

const afterMapSafetyTitle = 'Safety Perception Distribution by Munich Administrative Region During the Pandemic'
const afterMapSafetyExplanation = 'This maps displays on a custome scale which districts in Munich according to public opinion are deemed the most unsafe to go DURING the pandemic Safe areas decreased significantly after the outbreak of COVID-19.  Lots of districts became less safer during the pandemic, such as 12(Schwabing-Freimann), 13(Bogenhausen), 15(Trudering-Riem), 16(Ramersdorf-Perlach). At the meantime, several districts stay the same level of safety as before, like 22(Aubing-Lochhausen-Langwied),  23(Allach-Untermenzing). Central areas always perform as less safer places. The less safer area does not change much but the safety scores increase a lot, which means the general safety level declined after the outbreak of COVID-19.'


const beforeMapFrequencyTitle = 'Frequency of attendance by Munich Administrative Region Before the Pandemic'
const beforeMapFrequencyExplanation = 'This maps displays on a custome scale which districts in Munich according to public opinion were most likely visited by citizens BEFORE the pandemic'

const afterMapFrequencyTitle = 'Frequency of attendance by Munich Administrative Region Durning the Pandemic'
const afterMapFrequencyExplanation = 'This maps displays on a custome scale which districts in Munich according to public opinion were most likely visited by citizens DURING the pandemic Travelling frequencies decreased but not very remarkably after the outbreak of COVID-19. The general travelling frequencies declined as many districts are with light colors during the pandemic, but the central area of Munich still shows a higher level of frequency especially 1(Altstadt-Lehel), 2(Ludwigsvorstadt-Isarvorstadt), 3(Maxvorstadt), 4(Schwabing-West), 5(Au-Haidhausen).'


const color_during = 'rgba(248, 187, 208, 0.9)'
const color_before = 'rgba(187, 222, 251,0.9)'



const survey_places_infections_title = 'Main places of infections according to public opinion'
const survey_labels_places_infections = [
  'Public transport',
  'Hospital and medical practices',
  'Private homes',
  'Restaurants, Bars, Cafes',
  'Schools',
  'Elderly living and care facilities',
  'Gyms and Pools',
  'Workplace',
  'Cinemas, Stadiums',
  'Supermarket',
  'Shops',
  'Parks'
]

const placesMap_explanation ='Heat map of places where people meet in Munich such as supermarkets, shops, parks among others'
const placesMap_title ='Businesses in Munich'

const safety_score_main_title = 'Scoring Safety of Places'
const safety_score_title_before = 'Safety Scores Pandemic Before Covid-19'
const safety_score_title_after = 'Safety Scores Pandemic During Covid-19'

const biggest_safety_concern_main_title = 'Main Concers Regarding Safety'
const biggest_safety_concern_before_title = 'Biggest Safety Concerns Before Covid-19'
const biggest_safety_concern_after_title = 'Biggest Safety Concerns During Covid-19'

const biggest_safety_concern_labels = ['Physical health','Mental health','Others','Robbery','Sexual assault','Rioting']
const biggest_safety_concern_labels_during = ['Physical health','Mental health','Rioting','Robbery','Sexual assault']


const survey_data_places_infections = [63,56,51,47,46,45,35,32,29,21,8,3]
const biggest_safety_concern_before_data = [31,27,17,13,13,3]
const biggest_safety_concern_after_data = [55,38,0,1,1,10]
const biggest_safety_concern_before_max = 60;

const safety_score_labels_during = ['Gyms and Pools','Cinema, Theater, Stadiums','Hospitals and medical practices','Public Transport','Restaurants, Bars, Cafes','Schools','Supermarker','Workplace','Parks']
const safety_score_during = [6,6.1,6.1,5.6,4.8,4.9,6.2,4.2,4.9,3.3]

const safety_score_labels_before = ['Public transport','Cinema, Theater, Stadiums','Hospital and medical practices','Restaurants, Bars, Cafes','Supermarket','Schools','Gyms and Pools','Workplace','Shops','Parks']

const safety_score_before = [3.3,2.8,2.5,2.5,2.2,2.4,2.1,2.1,2.1,2.4]
const max_default = 70
const safety_max = 10;


const frequency_labels = ['Public transport','Cinema, Theater, Stadiums','Restaurants, Bars, Cafes','Supermarket','Gyms and Pools','Shops','Parks']
const frequency_data_before = [8.2,1.8,4.1,6.9,3.2,4.2,5.3]
const frequency_title_before = 'Frequency of visit Before Covid-19'
const frequency_title_during = 'Frequency of visit During Covid-19'
const frequency_data_during = [5.2,1,1.7,6,1.5,2.6,5.2]
const frequency_main_title = 'Scoring Frequency of Visit'

const type_score = 'Average Score';
const type_number_answers = 'Number of Answers'


const Body = () =>  {


    useEffect(()=>{
      // Init Materilize JS
      M.AutoInit();

      // eslint-disable-next-line
    })

  let explanation = 'This will contain the map explanation of munich.'

  return(
    <div>
      <div className='container'>
        <Objectives/>
      </div>
      <div className='container'>
        <h5 className='center'><u>Results</u></h5>
        <br/>
        <div class="divider"></div>
        <br/>
        <div className='section'>
          <div className='row'>
            <MapCard map={placesMap} explanation={placesMap_explanation} title={placesMap_title}/>
          </div>
          <div className='row'>
            <div className='col s6'>
              <MapCard map={beforeMapSafety} explanation={beforeMapSafetyExplanation} title={beforeMapSafetyTitle}/>
            </div>
            <div className= 'col s6'>
              <MapCard map={afterMapDuring} explanation={afterMapSafetyExplanation} title={afterMapSafetyTitle}/>
            </div>
          </div>
          <div className='row'>
            <div className='col s6'>
            <MapCard map={beforeMapFrecuency} explanation={beforeMapFrequencyExplanation} title={beforeMapFrequencyTitle}/>
            </div>
            <div className= 'col s6'>
            <MapCard map={afterMapFrecuency} explanation={afterMapFrequencyExplanation} title={afterMapFrequencyTitle}/>
            </div>
          </div>
          <div class="divider"></div>
          <br/>
        </div>
        <div class="divider"></div>
        <div className='section'>
          <h5 className='center' id='Results'><u>Graphical Results</u></h5>
          <br/>
          <div class="divider"></div>
          <br/>
          <div className='row'>
          <BarChart
            data={survey_data_places_infections}
            prop_labels={survey_labels_places_infections}
            title={survey_places_infections_title}
            max={max_default}
            color = {color_during}
            type={type_number_answers}
            />
          <div>
          <br/>
          <br/>
        </div>
        <div className ='row'>
          <div className='col s12' height="100%">
          <BarChart
            data={safety_score_before}
            prop_labels={safety_score_labels_before}
            title={safety_score_main_title}
            label1={safety_score_title_before}
            label2={safety_score_title_after}
            max={safety_max}
            color = {color_before}
            data2 = {safety_score_during}
            color2 = {color_during}
            type = {type_score}
            />
          </div>
        </div>
        <div className ='row'>
          <div className='col s12' height="100%">
          <BarChart
            data={biggest_safety_concern_before_data}
            prop_labels={biggest_safety_concern_labels}
            title={biggest_safety_concern_main_title}
            label1={biggest_safety_concern_before_title}
            label2={biggest_safety_concern_after_title}
            max={biggest_safety_concern_before_max}
            color = {color_before}
            data2 = {biggest_safety_concern_after_data}
            color2 = {color_during}
            type = {type_number_answers}
            />
          </div>
        </div>
        <div className ='row'>
          <div className='col s12' height="100%">
          <BarChart
            data={frequency_data_before}
            prop_labels={frequency_labels}
            title={frequency_main_title}
            label1={frequency_title_before}
            label2={frequency_title_during}
            max={safety_max}
            color = {color_before}
            data2 = {frequency_data_during}
            color2 = {color_during}
            type = {type_score}
            />
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>

  )
}

export default Body;



// <div className='col s6' height="100%">
//   <BarChart
//     data={safety_score_during}
//     prop_labels={safety_score_labels_during}
//     title={safety_score_title_after}
//     max={safety_max}
//     color = {color_during}
//   />
// </div>
