/*
  在asynComponent方法中使用Bundle组件把需要异步加载的组件包装起来
  这里要注意props必须传入组件, 否则会导致组件不能响应地更新渲染
  
  <Route>中使用asynComponent函数挂载异步组件
*/
// export const asynComponent = (Component, props) => (
//   <Bundle load={Component}>
//     { (Component) => <Component {...props} /> }
//   </Bundle>
// )

export function asynComponent(Component, props) {
  return (
    <Bundle load={Component}>
      { (Component) => <Component {...props} /> }
    </Bundle>
  )
}