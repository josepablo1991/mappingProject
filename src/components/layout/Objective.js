import React from 'react';

const Objectives = () => {

  return(
    <div class="card">
      <div class="card-content">
        <p>
          Due to the current public health situation there has been a radical shift of perception and safety in regards to
          public places having an impact both physically and psychologically. There is a need to visualize this change
          and reflect on the influence that it has in our daily interactions with our city. This visualization will also reflect
          in a good manner the challenges people have faced during this pandemic.
        </p>
      </div>
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
          <li class="tab"><a class="active" href="#test6">Introduction</a></li>
          <li class="tab"><a href="#test4">Objectives</a></li>
          <li class="tab"><a  href="#methodology">Methodology</a></li>
        </ul>
      </div>
      <div class="card-content grey lighten-4">
        <div id="test4">
          <p>
          Since, there is little discussion between the relationship of safety perception and physical environment in
          cities. People tend to have different feelings when they enter different physical spaces.The main objective is to convey how COVID-19 has changed our perception and interaction with the city.
          Through a series of mapas that show the before and after of safety perception within the city.
          </p>
        </div>
        <div id="methodology">
          <p>
          The data used in this project contains two parts, one is the online survey and the other is the Open Street Map data within the categories of places.
          To better summarize the results, the we reclassified the places to 10 categories first.
          Then we surveyed people living in Munich area to understand how Covid-19 has reshaped our perception of safety towards our city.
          The survey contained questions that looked into rating the safety level amongst a preselected list of spaces.
          Afterwards we allocated scores to each type of place based on the answers of survey respondents.
          Then we aggregated the scores of all kinds of places and divided it with the district area to have a relative safety index.
          We also did the same process to understand frequency of attendance and how this has changed due to the pandemic.
          </p>
          <br/>
          <p>
          We also did the same process to understand frequency of attendance and how this has changed due to the pandemic.
          </p>
        </div>
        <div id="test6">
          <p>
          As there has been a strong impact of both physical and psychological on human beings due to the current public health situation,
          there is a need to visualize these changes in regards to our daily interactions with urban physical spaces. We chose safety perception
          of different places as our main topic and employ it to have a better understanding of ourselves and feeling of the urban environment.
          In order to reflect in a good manner of the challenges people have faced during the pandemic, we use before and after maps to help telling the story.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Objectives;
