import React from 'react';
import { Table } from 'react-bootstrap';

class Alunos extends React.Component {
   constructor(props){
        super(props);

        this.state = {
            Alunos : [
                {'id':1, 'nome':'Luis Fernando','email':'luiz@teste.com'},
                {'id':2, 'nome':'João','email':'joao@teste.com'},
                {'id':3, 'nome':'Pedro','email':'Pedro@teste.com'},
            ]
        }
    }
    render(){
        return (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>N°</th>
                  <th>NOME</th>
                  <th>EMAIL</th>
                  <th>OPÇÕES</th>
                </tr>
              </thead>

              <tbody>

                {
                    this.state.Alunos.map((Aluno) =>
                    <tr>
                        <td> {Aluno.nome} </td>
                        <td> {Aluno.email} </td>
                        <td> Atualizar  Excluir </td>
                    </tr>
                    )
                }

              </tbody>
            </Table>

          );
        }
    }

 export default Alunos;