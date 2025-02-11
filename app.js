<!DOCTYPE html>
<html lang="en">
<head>
  <meta charest="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
   <title>JSX Example</title>
   <script src="https://unpkg.com/react@17/umd/react.app.js"></script>
   <script src="https://unpkg.com/react-dom@17/umd/react-dom.app.js"></script>
   <script src="https://unpkg.com/@babel/standalone"></script>
</head>
<body>
    <div id="root"></div>
    
    <script type="text/babel">
        function App() {
        return  <div><h1>Hello,</h1></div>;       
        }

        ReactDOM.render(<App />, document.getElementById('root'));

  </script>
</body>
</html>