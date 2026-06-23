class Solution {
    public String convert(String s, int numRows) {
        int n = s.length();
        if(numRows==1){
            return s;
        }
        StringBuilder[] ar = new StringBuilder[numRows];
        for(int i =0;i<numRows;i++){
            ar[i] = new StringBuilder();
        }
        int x =0;
        int i=0;
        while(x<n){
            
            while(i<numRows && x<n){
                ar[i%numRows].append(s.charAt(x));
                i++;
                x++;
            }
            i-=2;
            while(i>=0 && x<n){
                ar[i%numRows].append(s.charAt(x));
                i--;
                x++;
            }
            i+=2;
        }
        StringBuilder sb = new StringBuilder();
        for(StringBuilder sbs : ar){
            sb.append(sbs);
        }
        return  sb.toString();
    }
}
