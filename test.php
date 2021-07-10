<?php
    class Scanner {
      private $arr = [];
      private $count = 0;
      private $pointer = 0;

      public function next() { 
          if($this->pointer >= $this->count) {
              $str = trim(fgets(STDIN));
              $this->arr = explode(' ', $str);
              $this->count = count($this->arr);
              $this->pointer = 0;
          }
          $result = $this->arr[$this->pointer];
          $this->pointer++;
          return $result;
      }

      public function hasNext() {  
          return $this->pointer < $this->count;
      }

      public function nextInt() {   
          return (int)$this->next();
      }

      public function nextDouble() { 
          return (double)$this->next();
      }
    }


    class out { //最後の改行用
      public static function println($str = "") {
          echo $str . PHP_EOL;
      }
  }
  

  $sc = new Scanner();
  $n = $sc->nextInt();
  
  $arr_a = str_split(fgets(STDIN));
  $arr_b = str_split(fgets(STDIN));

  $ans = 0;

  $arr_x =array();

  for($i=0; $i<100; $i++){
      for($n = $arr_a[$i]; $n<=$arr_b[$i]; $n++){
          array_push($arr_x,$n);
      }
  }

echo $arr_x[0];
  
  
  
    
  
?>