import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerNotFound,ButtonNotFound,DescriptNotFound,TitleNotFound,SubTitleNotFound, ContentNotFound,BannerNotFound } from './styles';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = useCallback(() => {
    navigate('/');
  }, [navigate]);


  return (
    <ContainerNotFound>
      <ContentNotFound>
        <BannerNotFound>
          <TitleNotFound>404</TitleNotFound>
          <SubTitleNotFound>Opps! Page not found</SubTitleNotFound>
          <DescriptNotFound>The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.</DescriptNotFound>
          <ButtonNotFound onClick={goHome}>
            BackTo Home
          </ButtonNotFound>
        </BannerNotFound>
      </ContentNotFound>
    </ContainerNotFound>
  );
};

export default memo(NotFound);