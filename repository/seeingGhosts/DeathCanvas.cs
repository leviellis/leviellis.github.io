using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class DeathCanvas : MonoBehaviour
{
    public GameObject deathScreen;
    public GameObject onboardingCanvas;
    public GameObject startButton;
    public GameObject gameCanvas;

    [HideInInspector]
    public bool died;

    [HideInInspector]
    public bool control = false;

    bool restart = false;

    RectTransform image;
    Vector3 startingPosition;
    public float speed;

    public GameObject ghostManager;

    // Start is called before the first frame update
    void Start()
    {
        image = deathScreen.GetComponent<RectTransform>();
        startingPosition = image.transform.position;
    }

    // Update is called once per frame
    void Update()
    {
        if (died)
        {
            //died = false;

            restart = false;

            if (image.position.y >= -1500)
            {
                deathScreen.transform.Translate(Vector3.down * speed * Time.deltaTime);
            }

            StartCoroutine(Restart());
            StartCoroutine(DestroyGhosts());
            StartCoroutine(DeathReset());

            if (control)
            {
                StartCoroutine(StartInteract());
                control = false;
            }

            ghostManager.GetComponent<ObjectMaker>().amountToMake = 3;
        }

        if (restart)
        {
            deathScreen.transform.position = startingPosition;
        }
    }
    IEnumerator Restart()
    {
        yield return new WaitForSeconds(1.5f);
        //print("restart ran");
        restart = true;
        onboardingCanvas.SetActive(true);
        gameCanvas.SetActive(false);
    }

    IEnumerator DestroyGhosts()
    {
        yield return new WaitForSeconds(1.5f);

        ghostManager.GetComponent<GhostDestroyer>().startFunction = true;
    }

    IEnumerator DeathReset()
    {
        yield return new WaitForSeconds(3f);

        died = false;
    }

    IEnumerator StartInteract()
    {
        yield return new WaitForSeconds(4.5f);

        startButton.GetComponent<Button>().interactable = true;
    }
}
