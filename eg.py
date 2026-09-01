from math import gcd 
class Frac:
    def __init__(self,m,n,simplify = True):
        
        self.is_simplified = simplify
        if simplify:
            u = gcd(m,n)
            self.m = m//u
            self.n = n//u
        else:
            self.m = m
            self.n = n
    def __add__(self,f):
        if type(f) is int:
            return Frac(self.m + self.n*f,self.n)
        if type(f) is Frac:
            return Frac(self.m * f.n + f.m * self.n, self.n * f.n)
    def __radd__(self,f):
        return self + f
    def __eq__(self,f):
        if type(f) is int:
            if self.m == f and self.n == 1:
                return True
            return False
        if type(f) is Frac:
            if self.m == f.m and self.n == f.n:
                return True
            return False
    
            
      
def _egyptian_greedy(l: tuple[int,int]):
    m,n = l
    k = n // m + 1
    gc = gcd(m*k - n, n*k)
    return k,((m*k - n)//gc, (n*k)//gc)

def egyptian_greedy(l: tuple[int,int]):
    ks = []
    
    while l[0] != 0 and l[0] != 1:
        k,l2 = _egyptian_greedy(l)
        ks += [k]
        l = l2
        if l[0] == 1:
            ks += [l[1]]
        print(k,l2)
    return ks

MD = 300
def egyptian_brute(l, terms=3, maxdigit=MD):
    m,n = l
    f = Frac(m,n)
    for N in range(pow(maxdigit,terms)):
        boop = [1+(N // maxdigit**i) % maxdigit for i in range(terms)]
        boop2 = [Frac(1,i) for i in boop]
        if sum(boop2) == f:
            return boop
def egyptian_select(l):
    # we assume the decomposition is 1/mN + 1/a + 1/b
    m,n = l

    f = Frac(m,n)

    for i in range(1,300):
        for j in range(1,300):
            for k in range(1,300):
                if Frac(1,j) + Frac(1,k) + Frac(1,i*n) == f:
                    if j!=k and k!=i*n and j!=i*n:
                        return [j,k,i*n]
# is there an efficient way to do equivalence classes?
print(egyptian_greedy((3,7)))

for i in range(5,300):
    if i%4:
        print(i)
        s = egyptian_greedy((4,i))
        print(s)
        
        print(f"Checking brute force algorithm up to {MD}.")
        print(egyptian_select((4,i)))
    
