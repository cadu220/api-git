import React, { useState, useEffect } from "react";

import {useParams} from "react-router-dom"
import { Sidebar, Main, Container, Loading } from "./styles";
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";
import { getRepos, getUser, getlangsFrom } from "../../services/api";

function RepositoriesPage() {
  const {login} =  useParams();

  const [user, setUser] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [languages, setLanguages] = useState();
  const [loading, setLoading] = useState(true);
  const [repositories, setRepositories] = useState();

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([getUser(login)
        ,getRepos(login)
      ]);

      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data)
      setLanguages(getlangsFrom(repositoriesResponse.data))

      setLoading(false);
    };

    loadData();
  }, []);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
