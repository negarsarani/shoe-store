import El from './library/El';

function App() {
  const app = [
    El({
      element: 'div',
      className: 'w-full h-full z-[100] absolute ',
      id: 'routes',
      child: Route(),
    }),
  ];
  return Container(app);
}
export default App;
