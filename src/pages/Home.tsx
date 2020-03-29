import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonChip, IonButtons, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useContext, useState } from 'react';
import { ApiContext } from '../ApiContext';
import StateCard from '../components/StateCard';
import {Pie, Doughnut, Bar} from 'react-chartjs-2'


const Home: React.FC = () => {

  const { stateWise } = useContext(ApiContext)
  const [chartType, setchartType] = useState({isBar:true})

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar  color='dark'>
          <IonTitle className="title">COVID-19</IonTitle>
          </IonToolbar>
          </IonHeader>
          <IonContent color="primary" >
          <IonGrid>
          <IonRow>
          <IonCol size="6">
            <IonButton expand="block" onClick={()=>setchartType({isBar:true})} color="dark">Bar</IonButton>
            </IonCol>
            <IonCol size="6">
            <IonButton expand="block" onClick={()=>setchartType({isBar:false})} color="dark">Pie</IonButton>
            </IonCol>
            </IonRow>
            </IonGrid>
          {
            stateWise.length ? (stateWise.map((state:any,index:any)=>(
              <IonCard key={index}>
              <IonCardHeader> <IonCardTitle className="title">{state.state}</IonCardTitle></IonCardHeader>
              <IonCardContent>
             
             { chartType.isBar ? ( <Bar
              data={{datasets: [{
                label:'Victims',
                      borderWidth: 0,
                      borderAlign: "center",
                      backgroundColor: [
                        "#ffc409",
                        "#5260ff",
                       "#eb445a",
                       "#2dd36f"
                      ],
                      data: [state.active, state.confirmed, state.deaths,state.recovered]
                    }],
                    labels: [
                      'Active',
                      'Confirmed',
                      'Deaths',
                      'Recovered'
                  ]
                }}
              />)
              :
              (
                <Pie
              data={{datasets: [{
                label:'Victims',
                      borderWidth: 0,
                      borderAlign: "center",
                      backgroundColor: [
                        "#ffc409",
                        "#5260ff",
                       "#eb445a",
                       "#2dd36f"
                      ],
                      data: [state.active, state.confirmed, state.deaths,state.recovered]
                    }],
                    labels: [
                      'Active',
                      'Confirmed',
                      'Deaths',
                      'Recovered'
                  ]
                }}
              />
              )}
              <IonChip className="title">Last Updated at {state.lastupdatedtime}</IonChip>
              </IonCardContent>
              <IonCard className="stateCard">
              <IonCardContent>
              <IonCardSubtitle color="warning">Active</IonCardSubtitle> <IonCardTitle color="warning">{state.active}</IonCardTitle></IonCardContent></IonCard>
              <IonCard className="stateCard">
              <IonCardContent>
              <IonCardSubtitle color="tertiary">Confirmed</IonCardSubtitle> <IonCardTitle color="tertiary">{state.confirmed}</IonCardTitle></IonCardContent></IonCard>
            <IonCard className="stateCard">
            <IonCardContent>
            <IonCardSubtitle color='danger'>Death </IonCardSubtitle> <IonCardTitle color="danger">{state.deaths}</IonCardTitle></IonCardContent></IonCard>
            <IonCard className="stateCard">
            <IonCardContent>
            <IonCardSubtitle color="success">Recovered </IonCardSubtitle> <IonCardTitle color="success">{state.recovered}</IonCardTitle></IonCardContent></IonCard>
            </IonCard>
          )))
          :
          (
           <StateCard/>
          )
        }
      </IonContent>
    </IonPage>
  );
};

export default Home;
