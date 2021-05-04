using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class FollowPlayer : MonoBehaviour
{
    public GameObject target = null;
    private GameObject manager = null;
    private GameObject ghostManager = null;
    private NavMeshAgent ghost = null;

    //public GameObject deathCanvas = null;
    //public Transform deathScreen = null;

    float distance;

    Vector3 look;

    [HideInInspector]
    public Animator anim;

    bool walk;
    bool scare;

    AudioSource boo;
    bool done = false;

    public bool tapKill = false;

    // Start is called before the first frame update
    void Start()
    {
        manager = GameObject.Find("Canvas Manager");
        ghostManager = GameObject.Find("Ghost Manager");

        //deathCanvas = GameObject.Find("Death Canvas");
        //deathScreen = deathCanvas.gameObject.transform.GetChild(0);

        target = GameObject.Find("Follow");
        ghost = this.GetComponent<NavMeshAgent>();
        anim = GetComponent<Animator>();
        boo = GetComponent<AudioSource>();
    }

    // Update is called once per frame
    void Update()
    {
        distance = Vector3.Distance(target.transform.position, this.transform.position);

        //look = new Vector3(0, target.transform.position.y, 0);

        if (distance >= 9)
        {
            walk = false;
            anim.SetBool("Walk", walk);
        }

        if (distance < 9)
        {
            ghost.SetDestination(target.transform.position);

            transform.LookAt(target.transform);

            walk = true;
            anim.SetBool("Walk", walk);
        }

        if (distance < 1.8)
        {    
            if (done == false)
            {
                //print("in scare range");

                ScareSystem();

                done = true;
            }

            walk = false;
            anim.SetBool("Walk", walk);
        }
    }

    void ScareSystem()
    {
        ghostManager.GetComponent<TapGhosts>().canKill = false;
        //print("canKill = false");

        anim.SetTrigger("Scare");

        StartCoroutine(Scream());

        StartCoroutine(Die());
    }

    IEnumerator Scream()
    {
        yield return new WaitForSeconds(1.5f);
        boo.Play(0);
    }

    IEnumerator Die()
    {
        yield return new WaitForSeconds(1.65f);

        manager.GetComponent<DeathCanvas>().died = true;
        manager.GetComponent<DeathCanvas>().control = true;
    }
}
