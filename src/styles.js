import styled from 'styled-components';

export const Container = styled.div`
  background-color: #262626; 
  min-height: 100vh;
`;


export const Body = styled.div`
    width: 70vw;
    flex-direction: column;

    @media (max-width: 990px) { 
  
        max-width: 980px !important;
        margin: 0 10px;
    }

    @media(min-width: 1000px) {
        flex-direction: row;
    }

    @media (max-width: 1900px) { 
        width: 95vw;
        max-width: 1180px;
        margin: 0 10px;
    }
`;

export const Steps = styled.div`
    display: flex;
    justify-content: space-between;

    @media(min-width: 1000px) {
        flex-direction: column;
        justify-content: center;
    }
  
`;