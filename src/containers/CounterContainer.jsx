import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }), shallowEqual)
  // 새로운 객체를 만드는 형태면 상태가 바뀌었는지 아닌지 확인을 할 수 없어서 스토어가 업데이트될때마다 렌더링됨
  // shallowEqual을 useSelector의 두번째 인자로 전달해주면 이 함수가 객체 안의 가장 겉에있는값을 비교해서 바뀌었을때만 fals를 반환

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff))
  return (
    <Counter 
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  )
}

export default CounterContainer
