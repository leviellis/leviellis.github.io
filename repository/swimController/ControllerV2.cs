using UnityEngine;
using UnityEngine.InputSystem;

//[RequireComponent(typeof(CharacterController))]
public class ControllerV2 : MonoBehaviour
{
    //PlayerControls controls;
    GameObject character = null;
    Animator anim = null;
    Rigidbody rgd;
    [SerializeField] private int playerIndex;
    private CharacterController controller;

    //for moving
    bool moveForward = false;
    private bool isMoving = false;
    float moveSpeed = 1.8f;
    //float moveVal = 0f;
    [SerializeField] private float setSpeed = 1.8f;
    [SerializeField] private float setSprint = 3.6f;
    Vector3 Forward;

    //for sprinting
    private bool isSprinting = false;

    //for tilting & panning
    private bool tiltingUp = false;
    private bool tiltingDown = false;
    private bool panningLeft = false;
    private bool panningRight = false;
    private float rotation = 0.1f;
    [SerializeField] private float rotationSpeed = 180f;
    private float rotationBack = 0f;

    private void Start()
    {
        character = this.GetComponent<Transform>().GetChild(0).gameObject;

        moveSpeed = setSpeed;

        anim = character.GetComponent<Animator>();

        //anim.SetTrigger("Stay");

        rgd = GetComponent<Rigidbody>();

        print("controller active");
    }

    public int GetPlayerIndex()
    {
        return playerIndex;
    }

    public void OnMove(InputAction.CallbackContext context)
    {
        moveForward = context.action.triggered;

        isMoving = context.action.triggered;

        if (isMoving)
        {
            if (!isSprinting)
            {
                anim.SetTrigger("Swim");
            }

            if (isSprinting)
            {
                anim.SetTrigger("Sprint");
            }

            //moveVal = 1;
        }

        if (!isMoving)
        {
            anim.SetTrigger("Stay");

            //moveVal = 0;
        }
    }

    public void OnUp(InputAction.CallbackContext context)
    {
        Debug.Log("Tilting up");

        tiltingUp = context.action.triggered;
    }

    public void OnDown(InputAction.CallbackContext context)
    {
        Debug.Log("Tilting down");

        tiltingDown = context.action.triggered;
    }

    public void OnLeft(InputAction.CallbackContext context)
    {
        Debug.Log("Panning left");

        panningLeft = context.action.triggered;
    }

    public void OnRight(InputAction.CallbackContext context)
    {
        Debug.Log("Panning right");

        panningRight = context.action.triggered;
    }

    public void OnSprint(InputAction.CallbackContext context)
    {
        Debug.Log("Sprinting");

        isSprinting = context.action.triggered;

        if (isSprinting)
        {
            moveSpeed = setSprint;
        }

        if (!isSprinting)
        {
            moveSpeed = setSpeed;
        }
    }

    void Update()
    {
        if (moveForward) //&& transform.position.y >= 12f && transform.position.y <= 30f
        {
            //Forward = transform.forward * moveSpeed * Time.deltaTime;
            moveSpeed = 1.8f;
            transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
        }

        else
        {
            if (moveSpeed > 0)
            {
                moveSpeed = moveSpeed - 0.003f;
                transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
            }

            else
            {
                Forward *= 0;
            }
        }

        //for panning & tilting

        if (tiltingUp && transform.rotation.x > -0.45f)
        {
            //if (rotationBack < 600)
            //{
                //rotationBack++;
            //}

            transform.Rotate(-rotation * rotationSpeed * Time.deltaTime, 0f, 0f, Space.Self);
            print(transform.rotation.x);
            //character.transform.Rotate(rotation * rotationSpeed * Time.deltaTime, 0f, 0f, Space.Self);
        }

        if (tiltingDown && transform.rotation.x < 0.45f)
        {
            //if (rotationBack < 600)
            //{
                //rotationBack++;
            //}

            transform.Rotate(rotation * rotationSpeed * Time.deltaTime, 0f, 0f, Space.Self);
            print(transform.rotation.x);
            //character.transform.Rotate(-rotation * rotationSpeed * Time.deltaTime, 0f, 0f, Space.Self);
        }

        //if (character.transform.rotation)

        if ((!tiltingUp || !tiltingDown) && rotationBack > 0)
        {
            rotationBack = 0;
        }

        if (panningLeft)
        {
            transform.Rotate(0f, -rotation * rotationSpeed * Time.deltaTime, 0f, Space.World);
        }

        if (panningRight)
        {
            transform.Rotate(0f, rotation * rotationSpeed * Time.deltaTime, 0f, Space.World);
        }
    }
}
