// couldnt solve, looked up the answer


function main() {

    var n = 3;
    var m = 17;

    towerBreakers(n, m);

}

function towerBreakers(n, m) {

    // Write your code here
    var player1_active = false;
    var towers = new Array(n).fill(m);
    console.log(towers);
    var highest_tower_val
    var highest_tower_pos = 0;

    while (towers != '1,1,1') {
        player1_active = !player1_active;
        highest_tower_val = 0;
        for (let i = 0; i < towers.length; i++) {
            if (towers[i] >= highest_tower_val) {
                highest_tower_pos = i;
                highest_tower_val = towers[highest_tower_pos];

                console.log('pos ' + highest_tower_pos)
                console.log('val ' + highest_tower_val)

            }
        }


        for (let demolish = 2; demolish < towers[highest_tower_pos]; demolish++) {
            console.log('demolish ' + demolish)
            if (towers[highest_tower_pos] % demolish == 0 || towers[highest_tower_pos] % demolish == 1) {
                towers[highest_tower_pos] = towers[highest_tower_pos] - demolish;
                break;
            }
        }

        console.log('towers ' + towers)
        console.log('end game ' + end_game)
        console.log(player1_active)

    }
    if (player1_active == true) {
        return 1
    } else return 2
}

main()



int towerBreakers(int n, int m) { if(n % 2 == 0 || m == 1){ return 2; } else { return 1; } }