import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Breadcrumbs = (props) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><a href="/">Главная</a></BreadcrumbItem>
        <BreadcrumbItem active>Резюме</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;