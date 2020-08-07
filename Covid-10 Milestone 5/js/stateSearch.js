document.getElementById("stateSearch").onclick = function ()
{
    var stateInput = document.getElementById("state").value;
    var stateLower = stateInput.toLowerCase();
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };
    if (stateLower == "alabama" || stateLower == "al"){
      const api_url = 'https://covidtracking.com/api/v1/states/al/current.json';
      async function getCovidAl(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidAl();
    }
    else if (stateLower == "alaska" || stateLower == "ak"){
      const api_url = 'https://covidtracking.com/api/v1/states/ak/current.json';
      async function getCovidAk(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidAk();
    }
    else if (stateLower == "arizona" || stateLower == "az"){
      const api_url = 'https://covidtracking.com/api/v1/states/az/current.json';
      async function getCovidAz(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidAz();
    }
    else if (stateLower == "arkansas" || stateLower == "ar"){
      const api_url = 'https://covidtracking.com/api/v1/states/ar/current.json';
      async function getCovidAr(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidAr();
    }
    else if (stateLower == "california" || stateLower == "ca"){
      const api_url = 'https://covidtracking.com/api/v1/states/ca/current.json';
      async function getCovidCa(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidCa();
    }
    else if (stateLower == "colorado" || stateLower == "co"){
      const api_url = 'https://covidtracking.com/api/v1/states/co/current.json';
      async function getCovidCo(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidCo();
    }
    else if (stateLower == "connecticut" || stateLower == "ct"){
      const api_url = 'https://covidtracking.com/api/v1/states/ct/current.json';
      async function getCovidCt(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidCt();
    }
    else if (stateLower == "delaware" || stateLower == "de"){
      const api_url = 'https://covidtracking.com/api/v1/states/de/current.json';
      async function getCovidDe(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidDe();
    }
    else if (stateLower == "florida" || stateLower == "fl"){
      const api_url = 'https://covidtracking.com/api/v1/states/fl/current.json';
      async function getCovidFl(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidFl();
    }
    else if (stateLower == "georgia" || stateLower == "ga"){
      const api_url = 'https://covidtracking.com/api/v1/states/ga/current.json';
      async function getCovidGa(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidGa();
    }
    else if (stateLower == "hawaii" || stateLower == "hi"){
      const api_url = 'https://covidtracking.com/api/v1/states/hi/current.json';
      async function getCovidHi(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidHi();
    }
    else if (stateLower == "idaho" || stateLower == "id"){
      const api_url = 'https://covidtracking.com/api/v1/states/id/current.json';
      async function getCovidId(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidId();
    }
    else if (stateLower == "illinois" || stateLower == "il"){
      const api_url = 'https://covidtracking.com/api/v1/states/il/current.json';
      async function getCovidIl(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidIl();
    }
    else if (stateLower == "indiana" || stateLower == "in"){
      const api_url = 'https://covidtracking.com/api/v1/states/in/current.json';
      async function getCovidIn(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidIn();
    }
    else if (stateLower == "iowa" || stateLower == "ia"){
      const api_url = 'https://covidtracking.com/api/v1/states/ia/current.json';
      async function getCovidIa(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidIa();
    }
    else if (stateLower == "kansas" || stateLower == "ks"){
      const api_url = 'https://covidtracking.com/api/v1/states/ks/current.json';
      async function getCovidKs(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidKs();
    }
    else if (stateLower == "kentucky" || stateLower == "ky"){
      const api_url = 'https://covidtracking.com/api/v1/states/ky/current.json';
      async function getCovidKy(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidKy();
    }
    else if (stateLower == "louisiana" || stateLower == "la"){
      const api_url = 'https://covidtracking.com/api/v1/states/la/current.json';
      async function getCovidLa(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidLa();
    }
    else if (stateLower == "maine" || stateLower == "me"){
      const api_url = 'https://covidtracking.com/api/v1/states/me/current.json';
      async function getCovidMe(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidMe();
    }
    else if (stateLower == "maryland" || stateLower == "md"){
      const api_url = 'https://covidtracking.com/api/v1/states/md/current.json';
      async function getCovidMd(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidMd();
    }
    else if (stateLower == "massachusetts" || stateLower == "ma"){
      const api_url = 'https://covidtracking.com/api/v1/states/ma/current.json';
      async function getCovidMa(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidMa();
    }
    else if (stateLower == "michigan" || stateLower == "mi"){
      const api_url = 'https://covidtracking.com/api/v1/states/mi/current.json';
      async function getCovidMi(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidMi();
    }
    else if (stateLower == "minnesota" || stateLower == "mn"){
      const api_url = 'https://covidtracking.com/api/v1/states/mn/current.json';
      async function getCovidMn(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidMn();
    }
    else if (stateLower == "mississippi" || stateLower == "ms"){
      const api_url = 'https://covidtracking.com/api/v1/states/ms/current.json';
      async function getCovidMs(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidMs();
    }
    else if (stateLower == "missouri" || stateLower == "mo"){
      const api_url = 'https://covidtracking.com/api/v1/states/mo/current.json';
      async function getCovidMo(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidMo();
    }
    else if (stateLower == "montana" || stateLower == "mt"){
      const api_url = 'https://covidtracking.com/api/v1/states/mt/current.json';
      async function getCovidMt(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidMt();
    }
    else if (stateLower == "nebraska" || stateLower == "ne"){
      const api_url = 'https://covidtracking.com/api/v1/states/ne/current.json';
      async function getCovidNe(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidNe();
    }
    else if (stateLower == "nevada" || stateLower == "nv"){
      const api_url = 'https://covidtracking.com/api/v1/states/nv/current.json';
      async function getCovidNv(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidNv();
    }
    else if (stateLower == "new hampshire" || stateLower == "nh"){
      const api_url = 'https://covidtracking.com/api/v1/states/nh/current.json';
      async function getCovidNh(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidNh();
    }
    else if (stateLower == "new jersey" || stateLower == "nj"){
      const api_url = 'https://covidtracking.com/api/v1/states/nj/current.json';
      async function getCovidNj(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidNj();
    }
    else if (stateLower == "new mexico" || stateLower == "nm"){
      const api_url = 'https://covidtracking.com/api/v1/states/nm/current.json';
      async function getCovidNm(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidNm();
    }
    else if (stateLower == "new york" || stateLower == "ny"){
      const api_url = 'https://covidtracking.com/api/v1/states/ny/current.json';
      async function getCovidNy(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidNy();
    }
    else if (stateLower == "north carolina" || stateLower == "nc"){
      const api_url = 'https://covidtracking.com/api/v1/states/nc/current.json';
      async function getCovidNc(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidNc();
    }
    else if (stateLower == "north dakota" || stateLower == "nd"){
      const api_url = 'https://covidtracking.com/api/v1/states/nd/current.json';
      async function getCovidNd(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidNd();
    }
    else if (stateLower == "ohio" || stateLower == "oh"){
      const api_url = 'https://covidtracking.com/api/v1/states/oh/current.json';
      async function getCovidOh(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidOh();
    }
    else if (stateLower == "oklahoma" || stateLower == "ok"){
      const api_url = 'https://covidtracking.com/api/v1/states/ok/current.json';
      async function getCovidOk(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidOk();
    }
    else if (stateLower == "oregon" || stateLower == "or"){
      const api_url = 'https://covidtracking.com/api/v1/states/or/current.json';
      async function getCovidOr(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidOr();
    }
    else if (stateLower == "pennsylvania" || stateLower == "pa"){
      const api_url = 'https://covidtracking.com/api/v1/states/pa/current.json';
      async function getCovidPa(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidPa();
    }
    else if (stateLower == "rhode island" || stateLower == "ri"){
      const api_url = 'https://covidtracking.com/api/v1/states/ri/current.json';
      async function getCovidRi(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidRi();
    }
    else if (stateLower == "south carolina" || stateLower == "sc"){
      const api_url = 'https://covidtracking.com/api/v1/states/sc/current.json';
      async function getCovidSc(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidSc();
    }
    else if (stateLower == "south dakota" || stateLower == "sd"){
      const api_url = 'https://covidtracking.com/api/v1/states/sd/current.json';
      async function getCovidSd(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidSd();
    }
    else if (stateLower == "tennessee" || stateLower == "tn"){
      const api_url = 'https://covidtracking.com/api/v1/states/tn/current.json';
      async function getCovidTn(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidTn();
    }
    else if (stateLower == "texas" || stateLower == "tx"){
      const api_url = 'https://covidtracking.com/api/v1/states/tx/current.json';
      async function getCovidTx(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidTx();
    }
    else if (stateLower == "utah" || stateLower == "ut"){
      const api_url = 'https://covidtracking.com/api/v1/states/ut/current.json';
      async function getCovidUt(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidUt();
    }
    else if (stateLower == "vermont" || stateLower == "vt"){
      const api_url = 'https://covidtracking.com/api/v1/states/vt/current.json';
      async function getCovidVt(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidVt();
    }
    else if (stateLower == "virginia" || stateLower == "va"){
      const api_url = 'https://covidtracking.com/api/v1/states/va/current.json';
      async function getCovidVa(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidVa();
    }
    else if (stateLower == "washington" || stateLower == "wa"){
      const api_url = 'https://covidtracking.com/api/v1/states/wa/current.json';
      async function getCovidWa(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidWa();
    }
    else if (stateLower == "west virginia" || stateLower == "wv"){
      const api_url = 'https://covidtracking.com/api/v1/states/wv/current.json';
      async function getCovidWv(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidWv();
    }
    else if (stateLower == "wisconsin" || stateLower == "wi"){
      const api_url = 'https://covidtracking.com/api/v1/states/wi/current.json';
      async function getCovidWi(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidWi();
    }
    else if (stateLower == "wyoming" || stateLower == "wy"){
      const api_url = 'https://covidtracking.com/api/v1/states/wy/current.json';
      async function getCovidWy(){

          const response = await fetch(api_url, requestOptions)
          const data = await response.json();

              document.getElementById('stateDateCurrent').textContent = data.date;
              document.getElementById('stateDateCheck').textContent = data.dateChecked;
              document.getElementById('stateDeathTotal').textContent = data.death;
              document.getElementById('stateDeathInc').textContent = data.deathIncrease;
              document.getElementById('stateHospitalTotal').textContent = data.hospitalizedCumulative;
              document.getElementById('stateHospitalCurrent').textContent = data.hospitalizedCurrently;
              document.getElementById('stateNeg').textContent = data.negative;
              document.getElementById('statePos').textContent = data.positive;
              document.getElementById('stateRec').textContent = data.recovered;
              console.log(data);

            }
      getCovidWy();
    }
    else{
	      document.getElementById('stateDateCurrent').textContent = "Invalid entry, check your state entry to make sure it is spelled correctly. You can also search using the state 2 letter abbreviation.";
              document.getElementById('stateDateCheck').textContent = " ";
              document.getElementById('stateDeathTotal').textContent = " ";
              document.getElementById('stateDeathInc').textContent = " ";
              document.getElementById('stateHospitalTotal').textContent = " ";
              document.getElementById('stateHospitalCurrent').textContent = " ";
              document.getElementById('stateNeg').textContent = " ";
              document.getElementById('statePos').textContent = " ";
              document.getElementById('stateRec').textContent = " ";
	}
};
