import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { useState } from 'react';
import BioRitimoCard from './components/BioRitimoCard';


function App() {

  const [name, setName] = useState('');
  const [nascimento, setNascimento] = useState();
  const [datacalculo, dtaCalculo] = useState();
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bio Ritmo Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Nome: </IonLabel>
            <IonInput value={name} 
            onIonChange={(event)=>setName(event.detail.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Nascimento: </IonLabel>
            <IonInput value={nascimento} 
            onIonChange={(event)=>setNascimento(event.detail.value)} type='date'
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Data de Calculo: </IonLabel>
            <IonInput value={datacalculo} 
            onIonChange={(event)=>dtaCalculo(event.detail.value)} type='date'
            />
          </IonItem>
            
        </IonList>
        <BioRitimoCard datacalculo={datacalculo}/>
      </IonContent>
    </IonApp>
  );
}

export default App;
