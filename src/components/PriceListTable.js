import React, {Component} from 'react'

export default class Table extends Component{
  render(){
  const {dataHead} = this.props
  const {dataBody} = this.props
  return(
    <table className='m-auto border border-collapse border-black border-solid stablet:m-0 stablet:mr-auto'>
      <TableHead dataHead = {dataHead} />
      <TableBody dataBody = {dataBody} />
    </table>
  )
}
}

function TableHead(props){
  const heads = props.dataHead.map((head)=>{
  return(
    <>
      <th className='p-1 text-left text-white bg-blue-900 border border-black border-solid'>
      {head.name}<br/>
        <span className='text-xs'>
        {head.tccs}
        </span>
      </th>
      <th className='p-1 text-center text-white bg-blue-900 border border-black border-solid'>
      {head.priceCan}
      </th>
      <th className='p-1 text-center text-white bg-blue-900 border border-black border-solid'>
      {head.priceBucket}
      </th>
      <th className='p-1 text-center text-white bg-blue-900 border border-black border-solid'>
      {head.coverage}
      </th>
      <th className='hidden p-1 text-center text-white bg-blue-900 border border-black border-solid stablet:table-cell'>
      {head.note}
      </th>
    </>
  )})
    return <thead>{heads}</thead>
}

function TableBody(props) {
  const rows = props.dataBody.map((row,index)=>{
    return(
      <tr key={index} className='hover:bg-red-100'>
        <td className='w-[125px] stablet:w-[255px] p-2 text-left border border-black border-solid'>
        <strong>{row.name}</strong> <br/>
        <i>{row.description}</i>
        </td>
        <td className='w-[48px] stablet:w-[95px] p-2 text-right border border-black border-solid'>
        {row.weightPriceCan}
        </td>
        <td className='w-[48px] stablet:w-[95px] p-2 text-right border border-black border-solid'>
        {row.weightPriceBucket}
        </td>
        <td className='w-[48px] stablet:w-[95px] p-2 text-right border border-black border-solid'>
        <i>{row.paintCover}<sup>2</sup></i>
        </td>
        <td className='hidden p-2 stablet:max-w-[299.92px] text-left border border-black border-solid w-12/12 stablet:table-cell'>
        {row.note}
        </td>
      </tr>
    )
  })
  return (
    <tbody>{rows}</tbody>
  )
}
