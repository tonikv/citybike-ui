/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";

type MapContainerProps = {
  children: React.ReactNode;
  center: any;
  zoom: number;
  scrollWheelZoom: boolean;
};

export const MapContainer = ({
  children,
  scrollWheelZoom,
}: MapContainerProps) => (
  <div data-scroll-wheel-zoom={scrollWheelZoom}>{children}</div>
);

export const TileLayer = () => <div />;
export const Marker = () => <div />;
export const Popup = () => <div />;
export const useMap = () => ({
  setView: () => {},
});
