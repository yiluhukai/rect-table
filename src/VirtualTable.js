import {MultiGrid} from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
import styles from './VirtualTable.css';
import React from 'react'



// const list = [
//     ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
// ];


export default class VirtualTable extends React.Component { 
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
          columnWidth: props.columns.reduce((a,b)=>a+ b.width,0),
          columnCount: 50,
          height: 300,
          overscanColumnCount: 0,
          overscanRowCount: 5,
          rowHeight: 200,
          rowCount: 100,

        }
        this._renderLeftSideCell = this._renderLeftSideCell.bind(this);
    } 


      _renderLeftSideCell({columnIndex, key, rowIndex, style}) {
        return (
          <div key={key} style={style} className={styles.Cell}>
             {`${this.props.dataSource[rowIndex].key}-column:${columnIndex}`}
          </div>
        );
    }

    render(){
        const {columnWidth} = this.state
        return (
            <MultiGrid
            cellRenderer={this._renderLeftSideCell}
            columnWidth={100}
            columnCount={5}
            fixedColumnCount={1}
            fixedRowCount={0}
            rowHeight={40}
            rowCount={this.props.dataSource.length}
            width={columnWidth}
            enableFixedColumnScroll
            enableFixedRowScroll
        />
        )
   } 
}

