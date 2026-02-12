
import React from 'react';

export enum View {
  Home = 'home',
  Lic = 'lic',
  PostOffice = 'postoffice',
  ShareMarket = 'sharemarket',
  About = 'about',
  Contact = 'contact'
}

export interface ServiceInfo {
  id: View;
  title: string;
  description: string;
  longDescription: string;
  // Fix: Added React import to resolve the missing namespace
  icon: React.ReactNode;
  colorClass: string;
  options: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
