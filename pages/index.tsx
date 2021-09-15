import { GetServerSidePropsContext, NextComponentType } from 'next';
import React from 'react';
import { useAppDispatch, useTypedSelector } from './../redux/hooks';
import { increment } from '../redux';
import { useDispatch } from 'react-redux';
import { parseCookies } from 'nookies';

const Index:React.FC = ({children}) => {
  const counter=useTypedSelector(store=>store.count)
  const dispatch=useDispatch()
  const onclick=()=>{
    dispatch(increment(3))
  }

  return (
    <div style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
      {counter.count}
      <button onClick={e=>onclick()}>click me</button>
    </div>
  );
}
export const getServerSideProps=(ctx:GetServerSidePropsContext)=>{
 
    return {
      props:{
          children:"hello"
      }
    }
}

export default Index;
