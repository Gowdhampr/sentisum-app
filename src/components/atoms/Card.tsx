import classnames from "classnames";

const Card = ({ ...Props }) => {
  const { children, classNames } = Props as {
    children: React.ReactNode;
    classNames?: string;
  };
  return (
    <div
      className={classnames(
        `rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200`,
        classNames
      )}
      {...Props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({
  title,
  children,
  classNames,
}: {
  title?: string;
  children: React.ReactNode;
  classNames?: string;
}) => {
  return (
    <div className={classnames(classNames)}>
      {title && (
        <h2 className={classnames("text-xl font-semibold text-gray-800 mt-4")}>
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

const CardBody = ({ ...Props }) => {
  const { children, classNames } = Props as {
    children: React.ReactNode;
    classNames?: string;
  };
  return (
    <div className={classnames(classNames)} {...Props}>
      {children}
    </div>
  );
};

const CardFooter = ({ ...Props }) => {
  const { children, classNames } = Props as {
    children: React.ReactNode;
    classNames?: string;
  };
  return (
    <div className={classnames("mt-4", classNames)} {...Props}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardBody, CardFooter };
