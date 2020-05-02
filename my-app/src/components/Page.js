import React, { useState } from 'react';
import styled from 'styled-components';
import { LeftArrow, RightArrow } from './Arrow'


const PagesContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(1, 1.5fr) 3fr;
  grid-template-areas: 'left-fill page-nav right-fill';
  grid-template-rows: 1fr;
  padding-bottom: 50px;  
`;

const PageContainer = styled.div`
  grid-area: page-nav;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p {
    padding: 7.5px;
  }

  .arrow {
      height: 25px;
      width: 25px;
      cursor: pointer;

      :hover {
          opacity: .7;
      }
  }
  

  .active-page {
      color: orange;
      
  }
`;

const PageStyle = styled.p`
  :hover {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border-radius: 5px;
  }
`;


const PageNavigation = (props) => {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(5);

    console.log('Props in page', props)
    console.log('Page', props.page)

    const pages = Array.from(Array(props.totalPages).keys()).slice(1);
    const PagesRender = () =>
        pages.slice(start, end).map((el) => {
            return <PageStyle className={props.page === el ? 'active-page' : null} key={el} onClick={() => props.setPage(el)}>{el}</PageStyle>;
        });


    return (
        <PagesContainer>
            <PageContainer>
                {start > 0 ? <LeftArrow end={end} setEnd={setEnd} start={start} setStart={setStart} /> : null}
                <PagesRender />
                <RightArrow end={end} setEnd={setEnd} start={start} setStart={setStart} />
            </PageContainer>
        </PagesContainer>
    )

}

export default PageNavigation