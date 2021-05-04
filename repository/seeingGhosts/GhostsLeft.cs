using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GhostsLeft : MonoBehaviour
{
    public GameObject ghostManager;
    public GameObject gameCanvasText;
    public GameObject winCanvas;

    int ghostsLeft;
    bool noWin;

    [HideInInspector]
    public bool startedGame = false;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        ghostsLeft = ghostManager.transform.childCount;

        gameCanvasText.GetComponent<TMPro.TextMeshProUGUI>().text = "Ghosts: " + ghostsLeft;

        noWin = this.GetComponent<DeathCanvas>().died;

        if (ghostsLeft == 0 && noWin == false && startedGame == true)
        {
            winCanvas.SetActive(true);
        }
    }
}
