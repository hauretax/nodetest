#include <stdio.h>
//NB = nombre de sous investie de base
//NBV = nombre de sous voulue par ans
//TP = taux de placement + 1
//AA = Ajouter par ans
# define NB 3000
# define NBV 144000
# define TP 1.02
#define AA 0000

int main()
{
	int i;
	double in;
	double po;
	double s_po;
	double gain;
	int ajout;

	i = 0;
	in = TP;
	po = NB;
	ajout = AA;
	while (gain < NBV)
	{
		s_po = po;
		po = po * in + ajout;
	       	gain = po - s_po;  
		i++;	
	}
	printf("gain totaux: %f\ngain aux bout de %d : %f\n",po , i, gain);
	return(po);
}
