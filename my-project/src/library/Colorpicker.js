function Colorpicker(params) {
  const obj = {
    yellow: 'bg-yellow-300',
    blue: 'bg-blue-300',
    rose: 'bg-rose-300',
    cyan: 'bg-cyan-300',
    red: 'bg-red-300',
    green: 'bg-green-300',
    pink: 'bg-pink-300',
    violet: 'bg-violet-300',
    amber: 'bg-amber-300',
    purple: 'bg-purple-300',
  };
  return obj[params];
}
export default Colorpicker