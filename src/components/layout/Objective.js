import React from 'react';

const Objectives = () => {

  return(
    <div class="card">
      <div class="card-content center-align hoverable">
        <h6>Project Overview</h6>
      </div>
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width hoverable">
          <li className="tab"><a className="active" href="#Introduction">Introduction</a></li>
          <li className="tab"><a href="#Objectives">Objectives</a></li>
          <li className="tab"><a  href="#methodology">Methodology</a></li>
          <li className="tab"><a  href="#conclusions">Conclusions</a></li>
        </ul>
      </div>
      <div class="card-content grey lighten-4 hoverable">
        <div id="Objectives">
          <p>
          Since, there is little discussion between the relationship of safety perception and physical environment in
          cities. People tend to have different feelings when they enter different physical spaces. The main objective is to convey how COVID-19 has changed our perception and interaction with the city.
          Through a series of maps that show the before and after of safety perception within the city.
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
          We also did the same process to understand frequency of attendance and how this has changed due to the pandemic. <span><a className='hoverable round' href='#Results'><strong>Graphic Results</strong></a></span>
          </p>
        </div>
        <div id="conclusions">
          <p>
          Overall, people worry more after the pandemic as they concern mainly about their physical and
          mental health conditions. In the mean time, people also tend to think that places which are
          more concurred and have more indoor activities are less safe. General safety perception decreased
          a lot with the exception of parks. This may bring some insights about urban environment construction
          and public health risks management for decision-makers. Also, helps citizens to have a better understanding
          of the change they have experienced towards what it means to be “Safe”.

          </p>
        </div>
        <div id="Introduction">
          <p>
          Due to the current public health situation there has been a radical shift of perception and safety in regards to
          public places having an impact both physically and psychologically. There is a need to visualize this change
          and reflect on the influence that it has in our daily interactions with our city. This visualization will also reflect
          in a good manner the challenges people have faced during this pandemic.
          </p>
          <br/>
          <p>
          To best reflect and understand these changes  that people have faced during this pandemic, we have used a series of  “Before” & “After” choropleth maps to help tell the story.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Objectives;
