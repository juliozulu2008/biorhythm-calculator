import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import dayjs from "dayjs";

function formatDate(isoString) {
    const day = dayjs(isoString);
   return day.format('DD/MM/YYYY');
}

function BioRitimoCard({datacalculo}) {
    return(
        <IonCard className="ion-text-center">
            <IonCardHeader>
                <IonCardTitle>{formatDate(datacalculo)}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <p>Fisico:</p>
                <p>Emocional:</p>
                <p>Intelectual:</p>
            </IonCardContent>
        </IonCard>
    );
}

export default BioRitimoCard;