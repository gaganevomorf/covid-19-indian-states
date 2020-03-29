import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonSkeletonText } from '@ionic/react';
import React from 'react';

const StateCard: React.FC = () => {

    return (
        <>
        <IonCard>
        <IonCardHeader>
        <IonCardTitle className="title">
        <IonSkeletonText animated></IonSkeletonText>
        </IonCardTitle>
        </IonCardHeader>
        <IonCardContent ><IonSkeletonText animated></IonSkeletonText></IonCardContent>
        </IonCard>
        <IonCard>
        <IonCardHeader>
        <IonCardTitle className="title">
        <IonSkeletonText animated></IonSkeletonText>
        </IonCardTitle>
        </IonCardHeader>
        <IonCardContent ><IonSkeletonText animated></IonSkeletonText></IonCardContent>
        </IonCard>
        <IonCard>
        <IonCardHeader>
        <IonCardTitle className="title">
        <IonSkeletonText animated></IonSkeletonText>
        </IonCardTitle>
        </IonCardHeader>
        <IonCardContent ><IonSkeletonText animated></IonSkeletonText></IonCardContent>
        </IonCard>
        <IonCard>
        <IonCardHeader>
        <IonCardTitle className="title">
        <IonSkeletonText animated></IonSkeletonText>
        </IonCardTitle>
        </IonCardHeader>
        <IonCardContent ><IonSkeletonText animated></IonSkeletonText></IonCardContent>
        </IonCard>
        <IonCard>
        <IonCardHeader>
        <IonCardTitle className="title">
        <IonSkeletonText animated></IonSkeletonText>
        </IonCardTitle>
        </IonCardHeader>
        <IonCardContent ><IonSkeletonText animated></IonSkeletonText></IonCardContent>
        </IonCard>
        <IonCard>
        <IonCardHeader>
        <IonCardTitle className="title">
        <IonSkeletonText animated></IonSkeletonText>
        </IonCardTitle>
        </IonCardHeader>
        <IonCardContent ><IonSkeletonText animated></IonSkeletonText></IonCardContent>
        </IonCard>
        <IonCard>
        <IonCardHeader>
        <IonCardTitle className="title">
        <IonSkeletonText animated></IonSkeletonText>
        </IonCardTitle>
        </IonCardHeader>
        <IonCardContent ><IonSkeletonText animated></IonSkeletonText></IonCardContent>
        </IonCard>
        </>
    );
};

export default StateCard;