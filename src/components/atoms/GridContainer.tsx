"use client";
import classnames from "classnames";

export interface GridContainerProps {
  gridColumn?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  children: React.ReactNode;
  classNames?: string;
}

export interface GridItemProps {
  children: React.ReactNode;
  classNames?: string;
}

const GridContainer = ({ ...Props }) => {
  const { children, classNames } = Props as GridContainerProps;
  return (
    <div
      className={classnames(
        "grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4",
        classNames
      )}
      {...Props}
    >
      {children}
    </div>
  );
};

const GridItem = ({ ...Props }) => {
  const { children, classNames } = Props as GridItemProps;

  return (
    <div className={classNames} {...Props}>
      {children}
    </div>
  );
};

export { GridContainer, GridItem };
