using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class behavior3D : MonoBehaviour
{
    private static int dimension = 32;

    public float speed = 0.15f;
    private float timer = 0;

    cell[,,] grid = new cell[dimension, dimension, dimension];

    bool initialized = false;
    bool pause = true;
    bool selRand = false;

    int dim2 = dimension - 1;

    public bool moralsEnabled = true;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        if (timer >= speed)
        {
            timer = 0f;

            if (initialized)
            {
                CountNeighbors();
                PopControl();
            }
        }

        if (timer < speed && !pause)
        {
            timer += Time.deltaTime;
        }

        if (!initialized)
        {
            if (Input.GetKeyDown(KeyCode.Return))
            {
                selRand = true;
                PlaceCells();
                initialized = true;
            }
        }

        if (Input.GetKeyDown(KeyCode.Space) && initialized)
        {
            pause = !pause;
        }
    }

    void CountNeighbors()
    {
        for (int z = 0; z < dimension; z++)
        {
            for (int y = 0; y < dimension; y++)
            {
                for (int x = 0; x < dimension; x++)
                {
                    int checkX1 = 1;
                    int checkX2 = -1;
                    int checkY1 = 1;
                    int checkY2 = -1;
                    int checkZ1 = 1;
                    int checkZ2 = -1;

                    if (x == dim2)
                    {
                        checkX1 = -dim2;
                    }

                    if (x == 0)
                    {
                        checkX2 = dim2;
                    }

                    if (y == dim2)
                    {
                        checkY1 = -dim2;
                    }

                    if (y == 0)
                    {
                        checkY2 = dim2;
                    }

                    if (z == dim2)
                    {
                        checkZ1 = -dim2;
                    }

                    if (z == 0)
                    {
                        checkZ2 = dim2;
                    }

                    int xNeighbors = grid[x + checkX1, y, z].cellVal + grid[x + checkX1, y, z + checkZ1].cellVal + grid[x + checkX1, y, z + checkZ2].cellVal + grid[x + checkX2, y, z + checkZ2].cellVal + grid[x + checkX2, y, z + checkZ1].cellVal + grid[x + checkX2, y, z].cellVal;
                    int yNeighbors = grid[x, y + checkY1, z].cellVal + grid[x + checkX1, y + checkY1, z].cellVal + grid[x + checkX2, y + checkY1, z].cellVal + grid[x + checkX2, y + checkY2, z].cellVal + grid[x + checkX1, y + checkY2, z].cellVal + grid[x, y + checkY2, z].cellVal;
                    int zNeighbors = grid[x, y, z + checkZ1].cellVal + grid[x, y + checkY1, z + checkZ1].cellVal + grid[x, y + checkY2, z + checkZ1].cellVal + grid[x, y + checkY2, z + checkZ2].cellVal + grid[x, y + checkY1, z + checkZ2].cellVal + grid[x, y, z + checkZ2].cellVal;

                    int numNeighbors = xNeighbors + yNeighbors + zNeighbors;
                    grid[x, y, z].numNeighbors = numNeighbors;
                }
            }
        }
    }

    void PopControl()
    {
        for (int z = 0; z < dimension; z++)
        {
            for (int y = 0; y < dimension; y++)
            {
                for (int x = 0; x < dimension; x++)
                {
                    if (grid[x, y, z].isAlive)
                    {
                        if (grid[x, y, z].numNeighbors == 6)
                        {
                            grid[x, y, z].SetEvil(true); 
                        }

                        else if (grid[x, y, z].numNeighbors != 2 && grid[x, y, z].numNeighbors != 3)
                        {
                            grid[x, y, z].SetAlive(false);
                            grid[x, y, z].SetEvil(false);
                        }
                    }

                    else
                    {
                        if (grid[x, y, z].numNeighbors == 3)
                        {
                            grid[x, y, z].SetAlive(true);
                            grid[x, y, z].SetEvil(false);
                        }
                    }
                }
            }
        }
    }

    void PlaceCells()
    {
        for (int z = 0; z < dimension; z++) 
        {
            for (int y = 0; y < dimension; y++)
            {
                for (int x = 0; x < dimension; x++)
                {
                    cell cell = Instantiate(Resources.Load("Prefabs/Cell", typeof(cell)), new Vector3(x, y, z), Quaternion.identity) as cell;
                    grid[x, y, z] = cell;

                    if (selRand)
                    {
                        grid[x, y, z].SetAlive(RandomGen());
                    }
                }
            }
        }
    }

    bool RandomGen()
    {
        int rand = UnityEngine.Random.Range(0, 100);

        if (rand == 0)
        {
            return true;
        }

        return false;
    }
}
