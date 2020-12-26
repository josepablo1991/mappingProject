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
          <li class="tab"><a href="#test4">Objectives</a></li>
          <li class="tab"><a class="active" href="#test5">Methodology</a></li>
          <li class="tab"><a href="#test6">Quick Insights</a></li>
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
        <div id="test5">
          <p>
          To understand how Covid-19 has reshaped our perception of safety towards our city we surveyed people living in Munich area. The survey contained
          questions that looked into rating amongst a preselected list which spaces people thought were more or less safe. After we obtained from OpenStreet map all
          places that were within the categories of the places listed such as: parks, restaurants, cinemas, theaters among others. After we alocated a score to each place
          based on the answers of the citizents that participated in the survey. We then aggregated the results and divide the resulting values with the district area to have a
          relative safety index.
          </p>
          <br/>
          <p>
          We also did the same process to understand frequency of attendance and how this has changed due to the pandemic.
          </p>
        </div>
        <div id="test6">
          <p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Objectives;
