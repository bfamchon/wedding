import { FormValues } from '@/src/lib/validation';
import * as React from 'react';

export const EmailTemplate: React.FC<Readonly<FormValues>> = (data) => (
  <div>
    <p>Présence: {data.option === 'coming' ? 'Oui' : 'Non'}</p>
    <p>Prénom: {data.firstName}</p>
    <p>Nom: {data.lastName}</p>
    <p>Nombre d'adultes : {data.adults}</p>
    <p>Nombre d'enfants : {data.children}</p>
    <p>Restrictions : {data.restrictions}</p>
  </div>
);
