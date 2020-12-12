import styled from 'styled-components';
import { Modal } from  'reactstrap'


export const Container = styled(Modal)`

  
  .modal-content {
    background-color: #fff !important;
  
    .modal-header {
        h5 {
            color: black;
        }
    }

    .modal-body {
        color: black;
    }

    .modal-footer {

        display: flex;
        justify-content: center;

        button {
            width: 184px;
            border: none;

            &:hover {
                opacity: 0.8;
            }
        }

        .cancel {
            background-color: transparent;
            color: #A9A9A9;
        }

        .submit {
            background-color: #0FBB00;
            color: #fff;
        }
    }
  }

`;

export const Box = styled.div`
    border: 1px solid #949494;
    padding: 1.5rem;
    margin: 1.5rem 0;

    div {
        text-align: left;
        h5 {
            font-size: 16px;
            color: #0B0B0B;
            margin: 0;
        }

        p {
            color: #A5A5A5;
        }
    }
`;
