import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [nascimento, setNascimento] = useState('');
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
            onIonChange={(event)=>setNascimento(event.detail.value)}
            />
          </IonItem>
            <p>Seja Bem Vindo <b>{name}</b></p>
            <p>{nascimento}</p>
        </IonList>
      </IonContent>
    </IonApp>
  );
}

export default App;
