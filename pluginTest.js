//stats
var attack;
var magicAttack;
var defense;
var magicDefense;
var vitality;
var agility;
var luck;
//Health and MP
var healthPoints;
var magicPoints;
//Special skills
var force;
var forceBar;
//EXP Variables
var expRate;
var expMax;
var expMin;
var expMultiplier;
//level
var levelMax;
var levelMin;
//----------
var i = 0;


	

function AttackStats() 
{
	attack = 5;
	

	if(attack >= 12 )
	{
		attack = attack * 2;
		console.log(attack);
	}
	else if(attack <= 6)
	{
		attack = attack + 8;
		console.log(attack);
	}
}

function MagicAttackStats()
{
	magicAttack = 23;
	
	if(magicAttack >=23)
	{
		magicAttack = magicAttack + 4;
		console.log(magicAttack);
	}
	else if(magicAttack <= 19)
	{
		magicAttack = magicAttack + 2;
		console.log(magicAttack);
	}
}

function DefenseStats()
{
	defense = 3;
	
	if(defense > 3)
	{
		defense = defense * 4;
		console.log(defense);
	}
	else if(defense <= 2)
	{
		defense = defense * 8;
		console.log(defense);
	}
}

function MagicDefenseStats()
{
	magicDefense = 14;
	
	if(magicDefense > 14)
	{
		magicDefense = magicDefense * 4;
		console.log(magicDefense);
	}
	else if(magicDefense <= 14)
	{
		magicDefense = magicDefense * 6;
		console.log(magicDefense);
	}
}

function VitalityStats()
{
		
}

function Start() 
{
	
	AttackStats();
	MagicAttackStats();
	DefenseStats();
	MagicDefenseStats();
	VitalityStats();
}

Start()




