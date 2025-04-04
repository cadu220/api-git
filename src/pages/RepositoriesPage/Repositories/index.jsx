import React from "react";

import PropTypes from "prop-types";
import Repository from "./Repository"

import {Container } from "./style"

function Repositories({repositories, currentLanguage}) {
const repos = repositories.filter((repository) => currentLanguage === undefined || repository.language === currentLanguage).map((repository) => ((
  <Repository key={repository.id} repository={repository} />
)))

  return (
    <Container>
      {repos}
    </Container>
  );
}

Repositories.defaultProps ={
  currentLanguage: undefined,
}

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string
    }
    ).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,

}

export default Repositories;
